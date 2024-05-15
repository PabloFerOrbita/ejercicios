var valores = [true, 5, false, "hola", "adios", 2];

if (valores[3].length > valores[4].length) {
    console.log(`"${valores[3]}" es mayor que "${valores[4]}"`)
} else if (valores[4].length > valores[3].length) {
    console.log(`"${valores[4]}" es mayor que ${valores[3]}`)
} else {
    console.log(`${valores[3]} y ${valores[4]} son iguales`)
}

console.log(`${valores[0]} != ${valores[2]} debería ser true: ${valores[0] != valores[2]}`)
console.log(`${valores[0]} == ${valores[2]} debería ser false: ${valores[0] == valores[2]}`)
console.log(`${valores[0]} > ${valores[2]} debería ser true: ${valores[0] > valores[2]}`)
console.log(`${valores[0]} < ${valores[2]} debería ser false: ${valores[0] < valores[2]}`)
console.log(`${valores[1]} + ${valores[5]} = ${valores[1] + valores[5]}`)
console.log(`${valores[1]} - ${valores[5]} = ${valores[1] - valores[5]}`)
console.log(`${valores[1]} * ${valores[5]} = ${valores[1] * valores[5]}`)
console.log(`${valores[1]} / ${valores[5]} = ${valores[1] / valores[5]}`)
console.log(`${valores[1]} % ${valores[5]} = ${valores[1] % valores[5]}`)