import pandas as pd

df = pd.read_csv('./data.csv')

for col in range(len(df.columns)-1, 1, -1):

    if pd.isna(df.iloc[0, col]) and pd.isna(df.iloc[0, col - 1]) and pd.isna(df.iloc[0, col - 2]):

        df.drop(df.columns[col], axis=1, inplace=True)

df.to_csv('out.csv')
