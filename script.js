// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.walk = function () {
    return console.log(this.name + ' walked');
  };
}

const joao = new Person('João', 20);
const maria = new Person('Maria', 25);
const bruno = new Person('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(selector) {
  const elementList = document.querySelectorAll(selector);

  this.elements = () => {
    return console.log(elementList);
  };

  this.addClass = (newClass) => {
    elementList.forEach((element) => {
      element.classList.add(newClass);
    });
    return console.log(`${newClass} added`);
  };

  this.removeClass = (removeClass) => {
    elementList.forEach((element) => {
      element.classList.remove(removeClass);
    });
    return console.log(`${removeClass} removed`);
  };
}

const test = new Dom('li');
test.elements();
test.addClass('active');
test.addClass('active2');
test.removeClass('active2');
