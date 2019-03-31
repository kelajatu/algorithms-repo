# Imagine you place a knight chess piece on a phone dial pad. This chess piece moves in an uppercase “L” shape: two steps horizontally followed by one vertically, or one step horizontally then two vertically:

# Suppose you dial keys on the keypad using only hops a knight can make. Every time the knight lands on a key, we dial that key and make another hop. The starting position counts as being dialed.

# How many distinct numbers can you dial in N hops from a particular starting position?

NEIGHBORS_MAP = {
    1: (6, 8),
    2: (7, 9),
    3: (4, 8),
    4: (3, 9, 0),
    5: tuple(),  # 5 has no neighbors
    6: (1, 7, 0),
    7: (2, 6),
    8: (1, 3),
    9: (2, 4),
    0: (4, 6),
}

def neighbors(position):
    return NEIGHBORS_MAP[position]