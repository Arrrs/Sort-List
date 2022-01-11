let cont = [];

function add() {
    let inp = document.getElementById("input").value;
    let arr = inp.split("");
    let name = [];
    let value = [];
    if (arr.length == 0 || arr.includes(' ')) {
        wrong();
        return cont;
    }
    name: for (let i = 0; i < arr.length; i++) {
        if ((arr[i] != "=" && i == arr.length - 2) || arr[0] == "=") {
            wrong();
            return cont;
        } else if (arr[i] != "=") {
            name.push(arr[i]);
        } else {
            for (let j = i + 1; j < arr.length; j++) {
                value.push(arr[j]);
            }
            cont.push({ [name.join("")]: value.join("") });
            break name;
        }
    }
    document.getElementById("input").value = '';
    writer(cont);
    return cont;
}
function writer(e) {
    document.getElementById("out").innerHTML = "";
    for (let i = 0; i < e.length; i++) {
        document.getElementById("out").innerHTML +=
            "<p>" + Object.keys(e[i]) + "=" + Object.values(e[i]) + "</p>";
    }
}
function sortNameValue(nameOrValue) {
    cont.sort(function (a, b) {
        if (nameOrValue == 0) {
            var aa = Object.keys(a)[nameOrValue].toLowerCase();
            var bb = Object.keys(b)[nameOrValue].toLowerCase();
        } else if (nameOrValue == 1) {
            var aa = Object.values(a)[0].toLowerCase();
            var bb = Object.values(b)[0].toLowerCase();
        }
        if (aa < bb) return -1;
        if (aa > bb) return 1;
        return 0;
    });
    document.getElementById("out").innerHTML = "";
    writer(cont);
    return cont;
}

function remove() {
    cont = [];
    document.getElementById("out").innerHTML = "";
    document.getElementById("xml").innerHTML = '';
    hid();
}

function showXML() {
    document.getElementById("xml").innerHTML = '';
    for (let i = 0; i < cont.length; i++) {
        document.getElementById("xml").innerHTML += "<p>&lt;" + Object.keys(cont[i])[0] + "&gt;" + Object.values(cont[i])[0] + "&lt;/" + Object.keys(cont[i])[0] + "&gt;</p>";
    }
}

function appearXML() {
    let a = document.getElementById("bottom").style;
    let b = document.getElementById("xmlButton");
    b.setAttribute("disabled", true);
    a.display = "block";
    a.opacity = 1;
    setTimeout (function() {
    }, 300)
    console.log();
}

function hid() {
    let a = document.getElementById("bottom").style;
    a.opacity = 0;
    let b = document.getElementById("xmlButton");
    b.removeAttribute("disabled");
    setTimeout (function() {
        a.display = "none";
    }, 300)
}
function wrong() {
    let a = document.getElementById("input").style;
    a.backgroundColor = "rgb(214, 97, 97)";
    setTimeout (() => a.backgroundColor = "rgb(204, 204, 204)", 400)
}