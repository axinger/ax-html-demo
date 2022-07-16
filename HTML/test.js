var obj = {
  name: "jim",
  list1: [1],
  list2: null,
}

console.log(obj.name)

console.log("age = ", obj?.age ?? 2)
console.log("height = ", obj?.height ?? 10)

let c = null

console.log("c = ", c ?? "1")

console.log("list1 = ", obj?.list1[0])
console.log("list1 1= ", obj?.list1[1] ?? 1)
console.log("list2 = ", obj?.list2?.[1] ?? "2")
