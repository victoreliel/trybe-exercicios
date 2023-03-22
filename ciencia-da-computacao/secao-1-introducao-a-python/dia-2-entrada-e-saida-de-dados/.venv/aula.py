# import random

# random_number = random.randint(1, 10)  # escolhe um número aleatório entre 1 e 10
# guess = ""

# while guess != random_number:  # enquanto não adivinhar o número
#     guess = int(input("Qual o seu palpite? "))  # pergunte a pessoa usuária um número

# print("O número sorteado era: ", guess)


# exercicio 1

# NAME = input("Insira seu nome: ")

# for letter in NAME:
#     print(letter)


# exercicio 2

# nums = input("Insira valores aqui, separados por espaço: ")

# numsArr = nums.split(" ")

# sum = 0
# for num in numsArr:
#     if not num.isdigit():
#         print(f"Erro ao somar valores, {num} não é um dígito.")
#     else:
#         sum += int(num)

# print(f"A soma dos valores válidos é: {sum}")

# while True:
#     try:
#         x = int(input("Please enter a number: "))
#         break
#     except ValueError:
#         print("Oops!  That was no valid number.  Try again...")


# exercicio 3

recuStudents = []
with open("file.txt") as gradesFile:
    for line in gradesFile:
        student_grade = line
        student_grades = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            recuStudents.append(student_grade[0] + "\n")


with open("recuStudents.txt", mode="w") as recuStudentsFile:
    print(recuStudents)
    recuStudentsFile.writelines(recuStudents)
