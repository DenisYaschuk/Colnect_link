const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const start = document.getElementById("start");
const endlink = document.getElementById("endlink");

const data_array = [
  [
    "Яка область є наймолодшою?",
    "Київська",
    "Донецька",
    "Черкаська",
    "Кіровоградська",
    3
  ],
  ["В якому році Україна стала незалежною?", "1993", "1991", "2000", "1989", 2],
  [
    "Яка область є найбільшою за площею?",
    "Одеська",
    "Дніпропетровська",
    "Київська",
    "Харківська",
    1
  ],
  [
    "Біля якого міста України знаходиться географічний центр Європи?",
    "Трускавець",
    "Луцьк",
    "Рахів",
    "Біла Церква",
    3
  ],
  [
    "Який вищий навчальний заклад України є найстаршим у Східній Європі?",
    "Острозька колегія",
    "Київський політехнічний інститут",
    "Чернівецький національний університет ім. Ю. Федьковича",
    "Києво-Могилянська академія",
    1
  ],
  [
    "Яке місце у світі українська мова займає за поширеністю?",
    "26",
    "107",
    "1",
    "39",
    1
  ],
  [
    "Хто є першим президентом незалежної України?",
    "Петро Порошенко",
    "Вітольд Фокін",
    "Леонід Кучма",
    "Леонід Кравчук",
    4
  ],
  ["Скільки лавр знаходиться на території України?", "12", "4", "1", "7", 2],
  [
    "У якому місті знаходиться найдавніший міст?",
    "Київ",
    "Феодосія",
    "Львів",
    "Ялта",
    2
  ],
  [
    "Яка мова є найбільш споріднена та близька до української?",
    "Російська",
    "Польська",
    "Білоруська",
    "Словацька",
    3
  ],
  [
    "В якому місті розташована найдовша набережна Європи?",
    "Київ",
    "Ялта",
    "Одеса",
    "Дніпро",
    4
  ],
  [
    "Якому видатному українцю поставлено найбільша кількість пам'ятників?",
    "Тарас Шевченко",
    "Богдан Хмельницький",
    "Юрій Кульчинцький",
    "Соломія Крушельницька",
    1
  ]
];

var plus = 0;
var time = 0;
var cur_answer = 0;
var count_answer = data_array.length;

function sec() {
  time++;
  if (document.getElementById("time"))
    document.getElementById("time").innerHTML =
      "Затрачено часу: " + time + " с";
}

function check(num) {
  document.getElementById("question").style.display = "none";
  if (num == 0) {
    document.getElementById("option1").style.display = "block";
    document.getElementById("option2").style.display = "block";
    document.getElementById("option3").style.display = "block";
    document.getElementById("option4").style.display = "block";
    document.getElementById("result").style.display = "block";

    document.getElementById("option1").innerHTML = data_array[cur_answer][1];
    document.getElementById("option2").innerHTML = data_array[cur_answer][2];
    document.getElementById("option3").innerHTML = data_array[cur_answer][3];
    document.getElementById("option4").innerHTML = data_array[cur_answer][4];

    document.getElementById("question").innerHTML = data_array[cur_answer][0];

    document.getElementById("start").style.display = "none";
    document.getElementById("end").style.display = "block";
    endlink.href = document.URL;

    var intervalID = setInterval(sec, 1000);
  } else {
    if (num == data_array[cur_answer][5]) {
      plus++;
      document.getElementById("result").innerHTML = "Правильно!";
    } else {
      document.getElementById("result").innerHTML =
        "Неправильно! Правильна відповідь: " +
        data_array[cur_answer][data_array[cur_answer][5]];
      document.getElementById("question").style.display = "block";
    }

    cur_answer++;
    if (cur_answer < count_answer) {
      document.getElementById("option1").innerHTML = data_array[cur_answer][1];
      document.getElementById("option2").innerHTML = data_array[cur_answer][2];
      document.getElementById("option3").innerHTML = data_array[cur_answer][3];
      document.getElementById("option4").innerHTML = data_array[cur_answer][4];

      document.getElementById("question").innerHTML = data_array[cur_answer][0];
    } else {
      document.getElementById("time").id = "stop";

      document.getElementById("option1").style.display = "none";
      document.getElementById("option2").style.display = "none";
      document.getElementById("option3").style.display = "none";
      document.getElementById("option4").style.display = "none";

      document.getElementById("question").style.display = "none";
      document.getElementById("result").style.display = "block";
      document.getElementById("end").style.display = "block";

      var percent = Math.round((plus / count_answer) * 100);
      var res =
        "Ви знаєте дуже мало про Україну! Перед подорожжю краще дізнатися ще щось нове...";
      if (percent > 50) res = "Досить добре, але є ще стільки цікавого!";
      if (percent == 100) res = "Ви точно знавець України!";

      document.getElementById("result").innerHTML =
        "Правильних відповідей: " +
        plus +
        " з " +
        count_answer +
        " (" +
        percent +
        "%)<br>" +
        res;
    }
  }
}

option1.addEventListener("click", () => check(1));
option2.addEventListener("click", () => check(2));
option3.addEventListener("click", () => check(3));
option4.addEventListener("click", () => check(4));
start.addEventListener("click", () => check(0));
