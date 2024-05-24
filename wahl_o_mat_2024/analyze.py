import matplotlib.pyplot as plt
import numpy as np
import polars as pl
from sklearn.manifold import TSNE as EMBEDDING


def metric(x, y):
    # return np.sum(np.abs(x - y))
    # return np.sum(x != y)
    return np.linalg.norm(x - y)


if __name__ == "__main__":
    df = pl.read_csv("wahl-o-mat-2024.csv").drop("question", "question_id")
    X = df.to_numpy().T
    # X[i_question, j_party]
    # shape of X is (number of questions, number of parties)
    embedding = EMBEDDING(metric="euclidean")
    _ = embedding.fit_transform(X)
    x, y = _[:, 0], _[:, 1]
    fig, ax = plt.subplots(figsize=(8, 8))
    ax.scatter(x, y)
    if not len(x) == len(y) or not len(x) == len(df.columns):
        raise ValueError("Wrong dimensions")
    for xi, yi, ci in zip(x, y, df.columns):
        ax.text(xi, yi + 0.02, ci, ha="center")
    plt.axis("off")
    plt.savefig("embedding.png")
