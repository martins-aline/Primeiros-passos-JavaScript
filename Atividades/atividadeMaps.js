function getAdmins(map) {
  let admins = [];
  for ([key, value] of map) {
    if (value == "Admin") {
      admins.push(key);
    }
  }
  return admins;
}

const usuarios = new Map();

usuarios.set("Luiz", "Admin");
usuarios.set("Stephany", "Admin");
usuarios.set("Jorge", "Admin");
usuarios.set("Nathália", "Usuer");
usuarios.set("Aline", "Admin");

console.log(getAdmins(usuarios));
