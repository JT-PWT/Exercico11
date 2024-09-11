var salario = parseFloat(prompt("Informe o salário"))
if (salario <= 500){
    console.log(salario * 1.15)
    document.write("Tenho pouco dindin somente R$ " + (salario * 1.15) + ".")

} else if(salario >= 500 && salario < 1000){
    console.log(salario * 1.125)
    document.write("Tenho um pouco mais de dindin somente R$ " + (salario * 1.125) + ".")

} else {(salario > 1000)
    console.log(salario * 1.10)
    document.write("Tenho um poucão de dindin somente R$ " + (salario * 1.10) + ".")
}



   