$.getJSON("../app/ActorsProfile.php", function(data){
    data.actor.forEach(function(value){
        $('#aktor').append(actorPanel(value));
    });

});

function actorPanel(person, age) {
    var html;
   
    actorAge(person.DateOfBirdth);

    html = ` <div class="row p-4">
          
    <!-- 1 kolumna cechy wyglądu -->
    <div class="col ">
      <div class="box2">
        <img class="img mx-auto" src="`+person.DefaultPictureFileName+`" alt="">
      </div>
      <div class="col">
        <!-- cechy wyglądu -->
        <div class="row p-1">
          <div class="col">
            <span class="line">Cechy wyglądu</span>
          </div>
        </div>
        <!-- oczy -->
        <div class="row p-1">
          <div class="col">
            <label style="font-size:10px;" for="eyes">Kolor oczu</label>
            <div class="input-group input-group-sm">
              <select class="custom-select" id="eyes">
                <option value="1">`+person.EyeColor+`</option>
              </select>
            </div>
          </div>
          <div class="col">
            <label style="font-size:10px;" for="height">Wzrost</label>
            <div class="input-group input-group-sm">
              <input class="form-control" id="height" type="text" value="`+person.Height+`">
            </div>
          </div>
        </div>
        <!-- włosy -->
        <div class="row p-1">
          <div class="col">
            <label style="font-size:10px;" for="hair">Kolor włosów</label>
            <div class="input-group input-group-sm">
              <select class="custom-select" id="hair">
                <option value="1">`+person.HairColor+`</option>
              </select>
            </div>
          </div>
          <div class="col">
            <label style="font-size:10px;" for="weight">Waga</label>
            <div class="input-group input-group-sm">
              <input class="form-control" id="weight" type="text" value="`+person.Weight+`">
            </div>
          </div>
        </div>
        <!-- but -->
        <div class="row p-1">
          <div class="col">
            <label style="font-size:10px;" for="shoe">Rozmiar buta</label>
            <div class="input-group input-group-sm">
              <select name="" id="shoe" class="custom-select">
                <option value="1">`+person.ShoeSize+`</option>
              </select>
            </div>
          </div>
          <div class="col">
            <label style="font-size: 10px;" for="hip">Obwód bioder</label>
            <div class="input-group input-group-sm">
              <input class="form-control" type="text" value="`+person.HipCircumference+`">
            </div>
          </div>
        </div>
        <!-- klata -->
        <div class="row p-1">
          <div class="col">
            <label style="font-size:10px;" for="t-shirt">Rozmiar ubrania</label>
            <div class="input-group input-group-sm">
              <select name="" id="t-shirt" class="custom-select">
                <option value="1">`+person.ClothingSize+`</option>
              </select>
            </div>
          </div>
          <div class="col">
            <label style="font-size: 10px;" for="chest">Obwód klatki</label>
            <div class="input-group input-group-sm">
              <input class="form-control" id="chest" type="text" value="`+person.ChestCircumference+`">
            </div>
          </div>
        </div>
        <!-- obwod pasa-->
        <div class="row p-1">
            <div class="col">
              &nbsp;
            </div>
            <div class="col">
              <label style="font-size: 10px;" for="waist">Obwód pasa</label>
              <div class="input-group input-group-sm">
                <input class="form-control" id="waist" type="text" value="`+person.WaistCircumference+`">
              </div>
            </div>
          </div>
      </div>
    </div>
    <!-- 2 kolumna Dane kontaktowe -->
    <div class="col ">
      <!-- id-aktora -->
      <div class="row p-1">
          <div class="col">
              <label style="font-size:10px;" for="actor_id">ID Aktora</label>
              <div class="input-group input-group-sm">
                <input class="form-control" id="actor_id" type="text" value="`+person.PersonsID+`">
              </div>
            </div>
      </div>
      <!-- imie nazwisko -->
      <div class="row p-1">
        <div class="col">
          <label style="font-size:10px;" for="name">Imie</label>
          <div class="input-group input-group-sm">
            <input class="form-control" id="name" type="text" value="`+person.FirstName+`">
          </div>
        </div>
        <div class="col">
          <label style="font-size:10px;" for="name">Nazwisko</label>
          <div class="input-group input-group-sm">
            <input class="form-control" id="surname" type="text" value="`+person.LastName+`">
          </div>
        </div>
      </div>
      <!-- dane kontakowe -->
      <div class="row p-1">
        <div class="col">
          <span class="line">Dane kontakowe</span>
        </div>
      </div>
      <!-- telefon -->
      <div class="row p-1">
        <div class="col">
          <label style="font-size:10px;" for="name">Telefon</label>
          <div class="input-group input-group-sm">
            <input disabled class="form-control" id="phone" type="text" value="`+person.Phone+`">
          </div>
        </div>
      </div>
      <!-- adrres -->
      <div class="row p-1">
        <div class="col">
          <span class="line">Adres</span>
        </div>
      </div>
      <!-- ulica-->
      <div class="row p-1">
        <div class="col">
          <label style="font-size:10px;" for="street">Ulica</label>
          <div class="input-group input-group-sm">
            <input class="form-control" id="street" type="text" value="`+person.Street+`">
          </div>
        </div>
        <div class="col">
          <label style="font-size:10px;" for="house_nr">Nr domu</label>
          <div class="input-group input-group-sm">
            <input class="form-control" id="house_nr" type="text" value="`+person.Building+`">
          </div>
        </div>
      </div>
      <!-- kod_pocztowy -->
      <div class="row p-1">
        <div class="col">
          <label style="font-size:10px;" for="post_code">Kod pocztowy</label>
          <div class="input-group input-group-sm">
            <input class="form-control" id="street" type="post_code" value="brak w jsonie">
          </div>
        </div>
        <div class="col">
          <label style="font-size:10px;" for="city">Miejscowość</label>
          <div class="input-group input-group-sm">
            <input class="form-control" id="city" type="text" value="`+person.City+`">
          </div>
        </div>
      </div>
      <!-- województwo -->
      <div class="row p-1">
        <div class="col">
          <label style="font-size:10px;" for="voivoidship">Województwo</label>
          <div class="input-group input-group-sm">
            <select class="custom-select" id="voivoidship">
              <option value="1">`+person.Voivodeship+`</option>
              <option value="2">pomorskie</option>
              <option value="3">warmińsko-mazurskie</option>
              <option value="4">podlaskie</option>
            </select>
          </div>
        </div>
      </div>
      <!-- narodowść -->
      <div class="row p-1">
        <div class="col">
          <label style="font-size:10px;" for="nation">Narodowść</label>
          <div class="input-group input-group-sm">
            <input class="form-control" id="nation" type="text" value="`+person.Nationality+`">
          </div>
        </div>
      </div>
      <!-- kraj -->
      <div class="row p-1">
        <div class="col">
          <label style="font-size:10px;" for="country">Kraj</label>
          <div class="input-group input-group-sm">
            <input class="form-control" id="country" type="text" value="`+person.Country+`">
          </div>
        </div>
      </div>
      <!-- doświadczenie -->
      <div class="row p-1">
        <div class="col">
          <label style="font-size:10px;" for="experience">Doświadczenie</label>
          <div class="input-group input-group-sm">
            <select class="custom-select" id="experience">
              <option value="">`+person.ArtisticExperience+`</option>
              <option value="serial">Serial</option>
              <option value="adv">Reklama</option>
              <option value="teatr">Teatr</option>
              <option value="warsztat">Warsztaty aktorskie</option>
              <option value="pokaz">Pokaz mody</option>
              <option value="inne">Inne</option>
            </select>
          </div>
        </div>
      </div>
      <!-- umiejętności -->
      <div class="row p-1">
        <div class="col">
          <label style="font-size:10px;" for="skills">Umiejętności</label>
          <div class="input-group input-group-sm">
            <select name="" id="skills" class="custom-select">
              <option value="horse">`+person.Skils+`</option>
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
    
    <!-- 3 kolumna -->
    <div class="col ">
      <!-- wiek i ocena -->
      <div class="row p-1">
        <div class="col">
          <label style="font-size:10px;" for="age">Wiek</label>
          <div class="input-group input-group-sm">
            <input class="form-control" id="age" type="text" value="`+actorAge(person.DateOfBirdth)+`">
          </div>
        </div>
        <div class="col">
          <label style="font-size:10px;" for="grade">Ocena aktorska</label>
          <div class="input-group input-group-sm">
            <select disabled name="" id="grade" class="custom-select">
              <option value="1">`+person.ActingSkillsGrade+`</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
      </div>
      <!-- puste
      <div class="row p-1">
        <div class="col">
          <span class="line" style="font-size:13px;">&nbsp;</span>
        </div>
      </div> -->
      <!-- email -->
      <div class="row p-1">
        <div class="col">
          <label style="font-size:10px;" for="mail">E-mail</label>
          <div class="input-group input-group-sm">
            <input class="form-control" id="mail" type="text" value="`+person.email+`">
          </div>
        </div>
      </div>
      <!-- empty -->
      <div class="row p-1">
        <div class="col">
          <span class="line" style="font-size:13px;">&nbsp;</span>
        </div>
      </div>
      <!-- data urodzenia -->
      <div class="row p-1">
        <div class="col">
          <label style="font-size:10px;" for="date">Data urodzenia</label>
          <div class="input-group input-group-sm">
            <input class="form-control" id="date" type="text" value="`+person.DateOfBirdth+`">
          </div>
        </div>
        <div class="col">
          <label style="font-size:10px;" for="gender">Płeć</label>
          <div class="input-group input-group-sm">
            <select name="" id="gender" class="custom-select">
              <option value="1">`+person.Gender+`</option>
              <option value="2">kobieta</option>
            </select>
          </div>
        </div>
      </div>
      <!-- wykszyałcenie -->
      <div class="row p-1">
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
              <option value="1">`+person.Education+`</option>
              <option value="2">podstawowe</option>
            </select>
          </div>
        </div>
      </div>
      <!-- zawód -->
      <div class="row p-1">
        <div class="col">
          <label style="font-size:10px;" for="profession">Zawód</label>
          <div class="input-group input-group-sm">
            <textarea class="form-control" name="" id="profession" rows="4">`+person.OccupationInfo+`</textarea>
          </div>
        </div>
      </div>
      <!-- prawo jazdy -->
      <div class="row p-1">
        <div class="col">
          <label style="font-size:10px;" for="driving_license">Prawo jazdy</label>
          <div class="input-group input-group-sm">
            <select name="" id="driving_license" class="custom-select">
              <option value="A">`+person.DrivingLicence+`</option>
            </select>
          </div>
        </div>
      </div>
      <!-- Język -->
      <div class="row p-1">
        <div class="col">
          <label style="font-size:10px;" for="language">Język</label>
          <div class="input-group input-group-sm">
            <select name="" id="language" class="custom-select">
              <option value="china">`+person.Languages+`</option>
            </select>
          </div>
        </div>
        <!-- poziom -->
        <div class="col">
          <label style="font-size:10px;" for="lang_lvl">Poziom</label>
          <div class="input-group input-group-sm">
            <select name="" id="lang_lvl" class="custom-select">
              <option value="C1">Brak w jsonie</option>
              <option value="B1">B1</option>
              <option value="A2">A2</option>
            </select>
          </div>
        </div>
      </div>
      <!-- Język -->
      <div class="row p-1">
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

    </div>

    <!-- 4 kolumna -->
    <div class="col ">
      <div class="row p-1">
          <div class="col">
              <label style="font-size:10px;" for="status">Status</label>
              <div class="input-group input-group-sm">
                <select name="" id="status" class="custom-select">
                  <option value="new">`+person.PersonStatus+`</option>
                  <option value="accepted">Zaakceptowany z formularza</option>
                  <option value="casting">Casting Zewnętrzny</option>
                </select>
              </div>
            </div>
      </div>
      <!-- casting id status -->
      <div class="row p-1">
        <div class="col">
          <label style="font-size:10px;" for="casting_id">Casting ID</label>
          <div class="input-group input-group-sm">
            <input class="form-control" id="casting_id" type="text" value="`+person.CastingSygnature+`">
          </div>
        </div>
      </div>
      <!-- puste -->
      <div class="row p-1">
        <div class="col">
          <span class="line" style="font-size:13px;">&nbsp;</span>
        </div>
      </div>
      <!-- archive nr -->
      <div class="row p-1">
        <div class="col">
          <label style="font-size:10px;" for="archive_nr">Numer archiwalny</label>
          <div class="input-group input-group-sm">
            <input class="form-control" id="archive_nr" type="text" value="BRAK W JSONIE">
          </div>
        </div>
      </div>
      <!-- puste -->
      <div class="row p-1">
        <div class="col">
          <span class="line" style="font-size:13px;">&nbsp;</span>
        </div>
      </div>
      <!-- archive nr -->
      <div class="row p-1">
        <div class="col">
          <label style="font-size:10px;" for="job_category">Kategoria zawodowa</label>
          <div class="input-group input-group-sm">
            <input class="form-control" id="job_category" type="text" value="`+person.OccupationCategory+`">
          </div>
        </div>
      </div>
      <!-- puste -->
      <div class="row p-1">
        <div class="col">
          &nbsp;
        </div>
      </div>
      <!-- acotr nr -->
      <div class="row p-1">
        <div class="col">
          <label style="font-size:10px;" for="actor_category">Kategoria aktorska</label>
          <div class="input-group input-group-sm">
            <input class="form-control" id="actor_category" type="text" value="`+person.ActorCategory+`">
          </div>
        </div>
      </div>

      <!-- znaki szczególne-->
      <div class="row p-1">
        <div class="col">
          <label style="font-size:10px;" for="special_signs">Znaki szczególne</label>
          <div class="input-group input-group-sm">
            <input class="form-control" id="special_signs" type="text" value="`+person.SpecialFeatures+`">
            <input class="form-control" id="special_signs" type="text" value="Blizna na ramieniu">
          </div>
        </div>
      </div>
      <!-- Hobby -->
      <div class="row p-1">
          <div class="col">
            <label style="font-size:10px;" for="hobby">Hobby</label>
            <div class="input-group input-group-sm">
              <textarea class="form-control" name="" id="hobby" rows="3"></textarea>
            </div>
          </div>
        </div>
         <!-- Obecne zajęcie -->
      <div class="row p-1">
          <div class="col">
            <label style="font-size:10px;" for="actual_hobby">Obecne zajęcie</label>
            <div class="input-group input-group-sm">
              <textarea class="form-control" name="" id="actual_hobby" rows="3">`+person.CurrentJobInfo+`</textarea>
            </div>
          </div>
        </div>
         <!-- Uwagi -->
      <div class="row p-1">
          <div class="col">
            <label style="font-size:10px;" for="comments">Uwagi</label>
            <div class="input-group input-group-sm">
              <textarea class="form-control" name="" id="comments" rows="3"></textarea>
            </div>
          </div>
        </div>
        <!-- tooltip -->
        <div class="row pt-3">
            <div class="col">
              <p style="font-size:10px;">Utworzone przez:`+person.WhoCreated+`<br> Ostatnia edycja: `+person.CreationDate+`<br> Edytował: `+person.WhoChanged+`</p>  
              </div>
            </div>
          </div>
    
  </div>`;

    return html;
}

function actorAge(DOB){
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

