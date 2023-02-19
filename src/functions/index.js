export function initEmpty() {
  let employeesArr = [
    { name: "Hamzeh", id: 1111, pass: "1111", phoneNumber: "0592711427" },
    { name: "Osid", id: 2222, pass: "2222", phoneNumber: "0592711427" },
    { name: "Sara", id: 3333, pass: "3333", phoneNumber: "0592711427" },
    { name: "Hussein", id: 4444, pass: "4444", phoneNumber: "0592711427" },
  ];

  let managersArr = [
    { name: "Khaled", id: 111, pass: "111" },
    { name: "Mohammad", id: 222, pass: "222" },
  ];

  let shiftsArr = [
    {
      day: 1,
      shifts: {
        morning: { taken: false, employee: {} },
        midday: { taken: false, employee: {} },
        night: { taken: false, employee: {} },
      },
    },
    {
      day: 2,
      shifts: {
        morning: { taken: false, employee: {} },
        midday: { taken: false, employee: {} },
        night: { taken: false, employee: {} },
      },
    },
    {
      day: 3,
      shifts: {
        morning: { taken: false, employee: {} },
        midday: { taken: false, employee: {} },
        night: { taken: false, employee: {} },
      },
    },
    {
      day: 4,
      shifts: {
        morning: { taken: false, employee: {} },
        midday: { taken: false, employee: {} },
        night: { taken: false, employee: {} },
      },
    },
    {
      day: 5,
      shifts: {
        morning: { taken: false, employee: {} },
        midday: { taken: false, employee: {} },
        night: { taken: false, employee: {} },
      },
    },
    {
      day: 6,
      shifts: {
        morning: { taken: false, employee: {} },
        midday: { taken: false, employee: {} },
        night: { taken: false, employee: {} },
      },
    },
    {
      day: 7,
      shifts: {
        morning: { taken: false, employee: {} },
        midday: { taken: false, employee: {} },
        night: { taken: false, employee: {} },
      },
    },
  ];

  let globalMessage = "";

  localStorage.setItem("employees", JSON.stringify(employeesArr));
  localStorage.setItem("managers", JSON.stringify(managersArr));
  localStorage.setItem("shifts", JSON.stringify(shiftsArr));
  localStorage.setItem("msg", JSON.stringify(globalMessage));
}

export function getManagers() {
  try {
    return JSON.parse(localStorage.getItem("managers"));
  } catch (error) {
    console.log(error);
  }
}

export function getMessage() {
  try {
    return JSON.parse(localStorage.getItem("msg"));
  } catch (error) {
    console.log(error);
  }
}

export function getEmployees() {
  try {
    return JSON.parse(localStorage.getItem("employees"));
  } catch (error) {
    console.log(error);
  }
}

export function getShifts() {
  try {
    return JSON.parse(localStorage.getItem("shifts"));
  } catch (error) {
    console.log(error);
  }
}

export function checkLogin(items, id, pass) {
  let result = null;
  for (let item of items) {
    if (item.id === parseInt(id) && item.pass === pass) {
      result = item;
    }
  }
  return result;
}

export function saveToStorage(name, data) {
  const strData = JSON.stringify(data);
  localStorage.setItem(name, strData);
}
