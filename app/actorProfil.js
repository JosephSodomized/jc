$.getJSON("../app/ActorsProfile.php", function (data) {
  data.actor.forEach(function (value) {
    $('#aktor').append(actorPanel(value));
  });

});

function actorPanel(person, age) {
  var html;

  actorAge(person.DateOfBirdth);

  html = `
 <div class="row text-right">
 <div class="col">
   <a href="#">
     <i class="fas fa-ellipsis-h fa-1x pt-1 pb-0"></i>
   </a>
 </div>
</div>
<div class="row px-2">
 <!-- 1 kolumna cechy wyglądu -->
 <div class="col">
   <div class="box2 bg-dark">
     <img class="img" src="`+ person.DefaultPictureFileName + `" alt="">
   </div>
   <div>
     <!-- cechy wyglądu 
<div class="row pt-1">
<div class="col">
 <span class="line">Cechy wyglądu</span>
</div>
</div> -->
     <!-- 1 wiersz -->
     <div class="row pt-1">
       <div class="col">
         <label style="font-size:10px;" for="eyes">Kolor oczu</label>
         <div class="input-group input-group-sm">
           <select class="custom-select" id="eyes">
             <option value="1">`+ person.EyeColor + `</option>
           </select>
         </div>
       </div>
       <div class="col">
         <label style="font-size:10px;" for="hair">Kolor włosów</label>
         <div class="input-group input-group-sm">
           <select class="custom-select" id="hair">
             <option value="1">`+ person.HairColor + `</option>
           </select>
         </div>
       </div>
       <div class="col">
         <label style="font-size:10px;" for="height">Wzrost</label>
         <div class="input-group input-group-sm">
           <input class="form-control" id="height" type="text" value="`+ person.Height + `">
         </div>
       </div>
     </div>
     <!-- 2 wiersz -->
     <div class="row pt-1">
       <div class="col">
         <label style="font-size:10px;" for="weight">Waga</label>
         <div class="input-group input-group-sm">
           <input class="form-control" id="weight" type="text" value="`+ person.Weight + `">
         </div>
       </div>
       <div class="col">
         <label style="font-size:10px;" for="shoe">Rozmiar buta</label>
         <div class="input-group input-group-sm">
           <select name="" id="shoe" class="custom-select">
             <option value="1">`+ person.ShoeSize + `</option>
           </select>
         </div>
       </div>
       <div class="col">
         <label style="font-size:10px;" for="t-shirt">Rozmiar ubrania</label>
         <div class="input-group input-group-sm">
           <select name="" id="t-shirt" class="custom-select">
             <option value="1">`+ person.ClothingSize + `</option>
           </select>
         </div>
       </div>
     </div>
     <!-- 3 wiersz -->
     <div class="row pt-1">
       <div class="col">
         <label style="font-size: 10px;" for="hip">Obwód bioder</label>
         <div class="input-group input-group-sm">
           <input class="form-control" type="text" value="`+ person.HipCircumference + `">
         </div>
       </div>
       <div class="col">
         <label style="font-size: 10px;" for="chest">Obwód klatki</label>
         <div class="input-group input-group-sm">
           <input class="form-control" id="chest" type="text" value="`+ person.ChestCircumference + `">
         </div>
       </div>
       <div class="col">
         <label style="font-size: 10px;" for="waist">Obwód pasa</label>
         <div class="input-group input-group-sm">
           <input class="form-control" id="waist" type="text" value="`+ person.WaistCircumference + `">
         </div>
       </div>
     </div>
   </div>
   <!-- UWAGI -->
   <!-- Uwagi -->
   <div class="row pt-1">
     <div class="col">
       <label style="font-size:10px;" for="comments">Uwagi</label>
       <div class="input-group input-group-sm">
         <textarea class="form-control" name="" id="comments" rows="3"></textarea>
       </div>
     </div>
   </div>
   <!-- Uwagi ocena -->
   <div class="row pt-1 grade_comments">
     <div class="col">
       <label style="font-size:10px;" for="grade_comment">Uwagi do oceny</label>
       <div class="input-group input-group-sm">
         <textarea class="form-control" name="" id="grade_comment" rows="2"></textarea>
       </div>
     </div>
   </div>
 </div>
 <!-- 2 kolumna Dane kontaktowe -->
 <div class="col ">
   <!-- imie nazwisko -->
   <div class="row pt-1">
     <div class="col">
       <label style="font-size:10px;" for="name">Imie</label>
       <div class="input-group input-group-sm">
         <input class="form-control" id="name" type="text" value="`+ person.FirstName + `">
       </div>
     </div>
     <div class="col">
       <label style="font-size:10px;" for="name">Nazwisko</label>
       <div class="input-group input-group-sm">
         <input class="form-control" id="surname" type="text" value="`+ person.LastName + `">
       </div>
     </div>
   </div>
   <!-- dane kontakowe 
<div class="row pt-1">
<div class="col">
<span class="line">Dane kontakowe</span>
</div>
</div> -->
   <!-- telefon -->
   <div class="row pt-1">
     <div class="col">
       <label style="font-size:10px;" for="name">Telefon</label>
       <div class="input-group input-group-sm">
         <input disabled class="form-control" id="phone" type="text" value="`+ person.Phone + `">
       </div>
     </div>
   </div>
   <!-- adrres
<div class="row pt-1">
<div class="col">
<span class="line">Adres</span>
</div>
</div> -->
   <!-- ulica-->
   <div class="row pt-1">
     <div class="col">
       <label style="font-size:10px;" for="street">Ulica</label>
       <div class="input-group input-group-sm">
         <input class="form-control" id="street" type="text" value="`+ person.Street + `">
       </div>
     </div>
     <div class="col">
       <label style="font-size:10px;" for="house_nr">Nr domu</label>
       <div class="input-group input-group-sm">
         <input class="form-control" id="house_nr" type="text" value="`+ person.Building + `">
       </div>
     </div>
   </div>
   <!-- kod_pocztowy -->
   <div class="row pt-1">
     <div class="col">
       <label style="font-size:10px;" for="post_code">Kod pocztowy</label>
       <div class="input-group input-group-sm">
         <input class="form-control" id="street" type="post_code" value="brak w jsonie">
       </div>
     </div>
     <div class="col">
       <label style="font-size:10px;" for="city">Miejscowość</label>
       <div class="input-group input-group-sm">
         <input class="form-control" id="city" type="text" value="`+ person.City + `">
       </div>
     </div>
   </div>
   <!-- województwo -->
   <div class="row pt-1">
     <div class="col">
       <label style="font-size:10px;" for="voivoidship">Województwo</label>
       <div class="input-group input-group-sm">
         <select class="custom-select" id="voivoidship">
           <option value="1">`+ person.Voivodeship + `</option>
           <option value="2">pomorskie</option>
           <option value="3">warmińsko-mazurskie</option>
           <option value="4">podlaskie</option>
         </select>
       </div>
     </div>
   </div>
   <!-- narodowść -->
   <div class="row pt-1">
     <div class="col">
       <label style="font-size:10px;" for="nation">Narodowść</label>
       <div class="input-group input-group-sm">
         <input class="form-control" id="nation" type="text" value="`+ person.Nationality + `">
       </div>
     </div>
   </div>
   <!-- kraj -->
   <div class="row">
     <div class="col">
       <label style="font-size:10px;" for="country">Kraj</label>
       <div class="input-group input-group-sm">
         <input class="form-control" id="country" type="text" value="`+ person.Country + `">
       </div>
     </div>
   </div>
   <!-- prawo jazdy -->
   <div class="row pt-1">
     <div class="col">
       <label style="font-size:10px;" for="driving_license">Prawo jazdy</label>
       <div class="input-group input-group-sm">
         <select name="" id="driving_license" class="custom-select">
           <option value="A">`+ person.DrivingLicence + `</option>
         </select>
       </div>
     </div>
   </div>
   <!-- puste -->
   <div class="row pt-1">
     <div class="col">
       &nbsp;
     </div>
   </div>
   <!-- puste -->
   <div class="row pt-1">
     <div class="col">
       &nbsp;
     </div>
   </div>
   <!-- doświadczenie -->
   <div class="row pt-1">
     <div class="col">
       <label style="font-size:10px;" for="experience">Doświadczenie</label>
       <div class="input-group input-group-sm">
         <select class="custom-select" id="experience">
           <option value="">`+ person.ArtisticExperience + `</option>
           <option value="serial">Serial</option>
           <option value="adv">Reklama</option>
           <option value="teatr">Teatr</option>
           <option value="warsztat">Warsztaty aktorskie</option>
           <option value="pokaz">Pokaz mody</option>
           <option value="inne">Inne</option>
         </select>
         <div class="input-group-append">
           <button class="btn btn-secondary" type="button">Wybierz</button>
         </div>
       </div>
     </div>
   </div>


 </div>

 <!-- 3 kolumna -->
 <div class="col">
   <!-- wiek i ocena -->
   <div class="row pt-1">
     <div class="col">
       <label style="font-size:10px;" for="age">Wiek</label>
       <div class="input-group input-group-sm">
         <input class="form-control" disabled id="age" type="text"
           value="`+ actorAge(person.DateOfBirdth) + `">
       </div>
     </div>
     <div class="col">
       <label style="font-size:10px;" for="grade">Ocena aktorska</label>
       <div class="rating pt-2" id="grade">
         <i id="minStar1" class="fa fa-star fa-lg" aria-hidden="true"></i>
         <i id="minStar2" class="fa fa-star fa-lg" aria-hidden="true"></i>
         <i id="minStar3" class="fa fa-star fa-lg" aria-hidden="true"></i>
         <i id="minStar4" class="fa fa-star fa-lg" aria-hidden="true"></i>
         <i id="minStar5" class="fa fa-star fa-lg" aria-hidden="true"></i>
       </div>

     </div>
   </div>
   <!-- puste
<div class="row pt-1">
<div class="col">
<span class="line" style="font-size:13px;">&nbsp;</span>
</div>
</div> -->
   <!-- email -->
   <div class="row pt-1">
     <div class="col">
       <label style="font-size:10px;" for="mail">E-mail</label>
       <div class="input-group input-group-sm">
         <input class="form-control" id="mail" type="text" value="`+ person.email + `">
       </div>
     </div>
   </div>
   <!-- empty 
<div class="row pt-1">
<div class="col">
<span class="line" style="font-size:13px;">&nbsp;</span>
</div>
</div> -->
   <!-- data urodzenia -->
   <div class="row pt-1">
     <div class="col">
       <label style="font-size:10px;" for="date">Data urodzenia</label>
       <div class="input-group input-group-sm">
         <input class="form-control" id="date" type="text" value="`+ person.DateOfBirdth + `">
       </div>
     </div>
     <div class="col">
       <label style="font-size:10px;" for="gender">Płeć</label>
       <div class="input-group input-group-sm">
         <select name="" id="gender" class="custom-select">
           <option value="1">`+ person.Gender + `</option>
           <option value="2">kobieta</option>
         </select>
       </div>
     </div>
   </div>
   <!-- wykszyałcenie -->
   <div class="row pt-1">
     <div class="col">
       <label style="font-size:10px;" for="civil">Stan cywilny</label>
       <div class="input-group input-group-sm">
         <select name="" id="civil" class="custom-select">
           <option value="alone">brak w jsonie</option>
           <option value="maried">zamezna/zamezny</option>
           <option value="maried">rozwiedziona/rozwiedziony</option>
         </select>
       </div>
     </div>
     <div class="col">
       <label style="font-size:10px;" for="degree">Wykształcenie</label>
       <div class="input-group input-group-sm">
         <select name="" id="degree" class="custom-select">
           <option value="1">`+ person.Education + `</option>
           <option value="2">podstawowe</option>
         </select>
       </div>
     </div>
   </div>
   <!-- zawód -->
   <div class="row ">
     <div class="col">
       <label style="font-size:10px;" for="profession">Zawód&nbsp&nbsp<a href="#">Dodaj CV</a></label>
       <div class="input-group input-group-sm">
         <textarea class="form-control" name="" id="profession"
           rows="4">`+ person.OccupationInfo + `</textarea>
       </div>
     </div>
   </div>
   <!-- Obecne zajęcie -->
   <div class="row">
     <div class="col">
       <label style="font-size:10px;" for="actual_hobby">Obecne zajęcie</label>
       <div class="input-group input-group-sm">
         <textarea class="form-control" name="" id="actual_hobby"
           rows="3">`+ person.CurrentJobInfo + `</textarea>
       </div>
     </div>
   </div>
   <!-- Hobby -->
   <div class="row">
     <div class="col">
       <label style="font-size:10px;" for="hobby">Hobby</label>
       <div class="input-group input-group-sm">
         <textarea class="form-control" name="" id="hobby" rows="2"></textarea>
       </div>
     </div>
   </div>
   <!-- umiejętności -->
   <div class="row">
     <div class="col">
       <label style="font-size:10px;" for="skills">Umiejętności</label>
       <div class="input-group input-group-sm">
         <select name="" id="skills" class="custom-select">
           <option value="horse">`+ person.Skils + `</option>
           <option value="fighting">Sztuki walki</option>
           <option value="fighting">Sztuki </option>
         </select>
         <div class="input-group-append">
           <button class="btn btn-secondary" type="button">Wybierz</button>
         </div>
       </div>
     </div>
   </div>
 </div>
 <!-- 4 kolumna -->
 <div class="col">
   <div class="row pt-1">
     <div class="col">
       <label style="font-size:10px;" for="status">Status</label>
       <div class="input-group input-group-sm">
         <select name="" id="status" class="custom-select">
           <option value="new">`+ person.PersonStatus + `</option>
           <option value="accepted">Zaakceptowany z formularza</option>
           <option value="casting">Casting Zewnętrzny</option>
         </select>
       </div>
     </div>
   </div>
   <!-- casting id status -->
   <div class="row pt-1">
     <div class="col">
       <label style="font-size:10px;" for="casting_id">Casting ID</label>
       <div class="input-group input-group-sm">
         <input class="form-control" id="casting_id" type="text" value="`+ person.CastingSygnature + `">
       </div>
     </div>
     <!-- id-aktora -->
     <div class="col">
       <label style="font-size:10px;" for="actor_id">ID Aktora</label>
       <div class="input-group input-group-sm">
         <input class="form-control" id="actor_id" type="text" value="`+ person.PersonsID + `">
       </div>
     </div>

   </div>
   <!-- puste 
<div class="row pt-1">
<div class="col">
<span class="line" style="font-size:13px;">&nbsp;</span>
</div>
</div> -->
   <!-- archive nr -->
   <div class="row pt-1">
     <div class="col">
       <label style="font-size:10px;" for="archive_nr">Numer archiwalny</label>
       <div class="input-group input-group-sm">
         <input class="form-control" id="archive_nr" type="text" value="BRAK W JSONIE">
       </div>
     </div>
   </div>
   <!-- puste 
<div class="row pt-1">
<div class="col">
<span class="line" style="font-size:13px;">&nbsp;</span>
</div>
</div> -->
   <!-- archive nr -->
   <div class="row pt-1">
     <div class="col">
       <label style="font-size:10px;" for="job_category">Kategoria zawodowa</label>
       <div class="input-group input-group-sm">
         <select class="custom-select" id="actor_category">
           <option value="category1">`+ person.OccupationCategory + `</option>
         </select>

       </div>
     </div>
   </div>
   <!-- puste -->
   <div class="row pt-1">
     <div class="col">
       &nbsp;
     </div>
   </div>
   <!-- acotr nr -->
   <div class="row pt-1">
     <div class="col">
       <label style="font-size:10px;" for="actor_category">Kategoria aktorska</label>
       <div class="input-group input-group-sm">
         <select class="custom-select" id="actor_category">
           <option value="category1">`+ person.ActorCategory + `</option>
         </select>
       </div>
     </div>
   </div>
   <!-- puste -->
   <div class="row pt-1">
     <div class="col">
       &nbsp;
     </div>
   </div>

   <!-- Język -->
   <div class="row pt-1">
     <div class="col">
       <label style="font-size:10px;" for="language">Język</label>
       <div class="input-group input-group-sm">
         <select name="" id="language" class="custom-select">
           <option value="ang">angielski</option>
           <option value="rus">rosyjski</option>
           <option value="esp">hiszpański</option>
         </select>
       </div>
     </div>
     <!-- poziom -->
     <div class="col">
       <label style="font-size:10px;" for="lang_lvl">Poziom</label>
       <div class="input-group input-group-sm">
         <select name="" id="lang_lvl" class="custom-select">
           <option value="C1">C1</option>
           <option value="B1">B1</option>
           <option value="A2">A2</option>
         </select>
       </div>
     </div>
   </div>
   <!-- puste -->
   <div class="row pt-1">
     <div class="col">
       &nbsp;
     </div>
   </div>
   <!-- puste -->
   <div class="row pt-1">
     <div class="col">
       &nbsp;
     </div>
   </div>
   <!-- puste -->
   <div class="row pt-1">
     <div class="col">
       &nbsp;
     </div>
   </div>
   <!-- puste -->
   <div class="row pt-1">
     <div class="col">
       &nbsp;
     </div>
   </div>
   <!-- znaki szczególne-->
   <div class="row pt-1">
     <div class="col">
       <label style="font-size:10px;" for="special_signs">Znaki szczególne</label>
       <div class="input-group input-group-sm">
         <select name="" id="skills" class="custom-select">
           <option value="scar">`+ person.SpecialFeatures
    + `</option>
           <option value="scar">`+ person.SpecialFeatures
    + `</option>
         </select>
         <div class="input-group-append">
           <button class="btn btn-secondary" type="button">Wybierz</button>
         </div>
       </div>
     </div>
   </div>



 </div>
</div>
<!-- puste -->
<div class="row pt-1">
  <div class="col">
    &nbsp;
  </div>
</div>
<!-- tooltip -->
<div class="row">
 <div class="col">
   <div class="row line2">
     <div class="col-3">
       <div class="text-left px-2 py-2">
       <label style="font-size:12px;"><input type="checkbox"> Zgoda na przetwarzanie danych
       osobowych</label>
 
       </div>
     </div>
     <div class="col text-left">
       <div class="row">
         <div class="col px-2 py-2">
           <label style="font-size:12px;"><a href="#">Dodaj zgodę</a></label>
         </div>
       </div>
     </div>
     <div class="col">
       <div class="text-right px-2 py-2">
         <span style="font-size:10px;">
           Utworzone przez: `+ person.WhoCreated + ` Ostatnia edycja: ` +
    person.CreationDate + ` Edytował: ` + person.WhoChanged + `
         </span>
       </div>
     </div>
   </div>
 </div>
</div>`;

  return html;
}

function actorAge(DOB) {
  var today = new Date();
  var birthDate = new Date(DOB);
  var age = today.getFullYear() - birthDate.getFullYear();
  var month = today.getMonth() - birthDate.getMonth();
  var day = today.getDate() - birthDate.getDate()
  if (month < 0 || (month === 0 && day < 0)) {
    age = age - 1;
  }
  console.log(month);
  return age;
}

// function init(){
// window.addEventListener('load', function(){
//   var addCommentButton =  document.querySelector(".add_comment");
//   var gradeComments =  document.querySelector(".grade_comments");
//   addCommentButton.addEventListener('click', showComments);

//   function showComments(){
//     $(gradeComments).toggle();
//   }
//   console.log(gradeComments);
// })
// }

// document.addEventListener('readystatechange', function() {
//   if (document.readyState === "complete") {
//     init();
//   }
// });

//dodawanie linku
var linkBox = document.querySelector('.link');
var btnLink = document.querySelector(".add_link_btn");
var linkGroup = document.querySelector('.link-group');
var linkInput = document.querySelector('.link-input');

btnLink.addEventListener('click', addLink);
linkBox.addEventListener('click', removeLink);

linkBox.style.display = 'none';

function addLink(e) {
  if (linkInput.value !== '') {
    linkBox.style.display = 'block';
    const li = document.createElement('li');
    li.className = 'list-group-item mx-0 my-1 p-1';
    li.appendChild(document.createTextNode(linkInput.value));

    const del = document.createElement('a');
    del.className = "float-right delete-item";
    del.innerHTML = '<i class="fas fa-times-circle px-1"></i>';
    li.appendChild(del);

    linkGroup.appendChild(li);
    linkArr(linkInput.value);

    linkInput.value = '';

    e.preventDefault();
  }
  else {
    alert("Dodaj link");
  }
}

var linkArray = [];
const linkArr = (arr) => {
  this.arr = arr;
  linkArray.push(arr);
  console.log(linkArray);
}

function removeLink(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove();

    //jeśli 0 to usuwa 'link'
    console.log(linkGroup.children.length);
    if (linkGroup.children.length == 0) {
      linkBox.style.display = 'none';
    }
  }
}

$('far fa-times-circle').hover(function () {
  $(this).fadeOut(1000);
});