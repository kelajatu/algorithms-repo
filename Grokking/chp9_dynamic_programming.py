if word_a[i] == word[j]:
    cell[i][j] = cell[i-1][j-1] + 1
    # letter match
else:
    cell[j][j] = max(cell[i-1][j], cell[i][j])
