import polars as pl


def load_file_into_lines(file) -> list[str]:
    with open(file) as f:
        lines = f.readlines()
    return lines


def extract_questions_from_lines(lines: list[str]) -> pl.DataFrame:
    # looks like this: WOMT_aThesen[7][0][1] = 'Die Jagd auf Wölfe soll in Regionen erlaubt sein, in denen der Bestand dadurch nicht gefährdet ist.';
    d = []
    for i, line in enumerate(lines):
        if (
            "WOMT_aThesen" in line
            and "][0][1] =" in line
            and "][0][0][" not in line
            and "Links" not in line
        ):
            question_id = line.split("[")[1].split("]")[0]
            if line.strip()[-1] == "=":
                question = lines[i + 1]
            else:
                question = line.split("= ")[-1]
            d.append(
                {
                    "question_id": question_id,
                    "question": question.replace(";", "").strip(),
                }
            )
    return pl.DataFrame(
        d,
        schema={
            "question_id": int,
            "question": str,
        },
    )


def extract_parties_from_lines(lines: list[str]) -> pl.DataFrame:
    d = []
    for line in lines:
        # if line looks like
        # WOMT_aParteien[i][0][0] = "NAME OF PARTY"
        if "WOMT_aParteien" in line and "][0][1]" in line:
            party_id = line.split("[")[1].split("]")[0]
            party_name = (
                line.split("= ")[-1].replace('"', "").replace(";", "").strip()
            )
            d.append(
                {
                    "party_id": party_id,
                    "party_name": party_name,
                }
            )
    return pl.DataFrame(
        d,
        schema={
            "party_id": int,
            "party_name": str,
        },
    )


def extract_answers_from_lines(lines: list[str]) -> pl.DataFrame:
    # each line looks like this: WOMT_aThesenParteien[37][12] = "1";
    # we want to get the question_id (37), the party_id (12) and the answer (1)

    d = []
    for line in lines:
        if "WOMT_aThesenParteien" in line:
            question_id = line.split("[")[1].split("]")[0]
            party_id = line.split("[")[2].split("]")[0]
            answer = line.split('"')[1]
            d.append(
                {
                    "party_id": party_id,
                    "question_id": question_id,
                    "answer": answer,
                }
            )
    return pl.DataFrame(
        d,
        schema={
            "party_id": int,
            "question_id": int,
            "answer": int,
        },
    )


if __name__ == "__main__":
    file = "js/module_definition.js"
    lines = load_file_into_lines(file)

    df_questions = extract_questions_from_lines(lines[0:1396])
    df_answers = extract_answers_from_lines(lines[1396:2689])
    df_parties = extract_parties_from_lines(lines[2689:-1])

    df = (
        df_answers.join(df_questions, on="question_id")
        .join(df_parties, on="party_id", how="left")
        .select("question_id", "question", "party_id", "party_name", "answer")
        .drop_nulls(subset=["party_id", "party_name"])
    )

    df.pivot(
        index=["question_id", "question"],
        columns=["party_name"],
        values=["answer"],
    ).write_csv("data/wahl-o-mat-2024.csv")
