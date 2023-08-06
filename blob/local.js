const obj = { hello: "world" };
const stringifiedObject= JSON.stringify(obj);
const blob = new Blob([stringifiedObject], {
  type: "application/json",
});

console.log(blob);

const reader = new FileReader();
reader.addEventListener("loadend", () => {
  const typedArrayData = new Uint8Array(reader.result);
  console.log(typedArrayData);
});
reader.readAsArrayBuffer(blob);
const text = await blob.text();
console.log(text);



