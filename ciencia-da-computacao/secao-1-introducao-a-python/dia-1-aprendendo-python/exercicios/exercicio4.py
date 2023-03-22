def biggest_name(names):
    bigger = ""
    for name in names:
        if len(name) > len(bigger):
            bigger = name
    return bigger
