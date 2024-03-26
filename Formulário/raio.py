raio = float(input("Digite o raio: "))
raioaoquadrado = raio ** 2
PI = 3.1415
area = PI * raioaoquadrado
print(f"A aŕea do circulo é: {area}")
perimetro = (2 * PI)* raio
print(f"O perímetro do circulo é {perimetro}")

nome = input("Digite seu nome: ")
print(f"Olá {nome}, tudo bem?")
print("Seu nome é: ", nome)

numero = int(input("Digite seu número: "))
contador = 1

while contador < 11:
    result = numero * contador
    print (result)
    contador = contador + 1

numero1 = int(input("Digite seu número 1: "))
numero2 = int(input("Digite seu número 2: "))
operacao = input("Digite o símbolo da operação: ")
operacao = operacao.strip()

match operacao:
    case '+':
        resultado = numero1 + numero2
        print(resultado)
    case '-':
        resultado = numero1 - numero2
        print(resultado)
    case '*':
        resultado = numero1 * numero2
        print(resultado)
    case '/':
        resultado = numero1 * numero2
        print(resultado)
    case _:
        print("OPeração inválida")
