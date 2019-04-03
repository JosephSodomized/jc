$.getJSON("../app/Actors.php", function (data) {
  //   $.getJSON( "http://aden.pl/projects/just-cast/API/Actors.php", function(data) {


  data.actors.forEach(function (actor) {
    // $('#mainContainer').append(actor.FirstName + ' ' + actor.LastName + '');

    $('#mainContainer').append(actorResult(actor));
  })
});

function actorResult(person) {
  var html;

  html = `<a href="../layouts/actor.html" class="list-group-item list-group-item-action actor-box mx-auto p-0 m-2 border-0">
                <div class="row my-0 mx-0">
                  <div class="bg-dark box">
                    <img class="img" src="`+ person.DefaultPictureFileName + `" alt="">
                  </div>
                  <div class="col-2 mx-2">
                    <div class="row py-2"><span style="font-size: 17px;">`+ person.FirstName + ' ' + person.LastName + `</span></div>
                    <div class="row">telefon: `+ person.Phone + `</div>
                    <div class="row">adres: `+ person.Street + " " + person.Building + `</div>
                    <div class="row pt-2"><span>Uwagi: spóźnia się na castingi</span></div>
                  </div>
                  <div class="col-2 mx-2">
                    <div class="row py-2"><span style="font-size: 17px;">`+ person.Age + ` lat
                        <div class="rating">
                          <i id="minStar1" class="fa fa-star fa-md" aria-hidden="true"></i>
                          <i id="minStar2" class="fa fa-star fa-md" aria-hidden="true"></i>
                          <i id="minStar3" class="fa fa-star fa-md" aria-hidden="true"></i>
                          <i id="minStar4" class="fa fa-star fa-md" aria-hidden="true"></i>
                          <i id="minStar5" class="fa fa-star fa-md" aria-hidden="true"></i>
                        </div>
                      </span></div>
                    <div class="row">email: `+ person.Email + `</div>
                  </div>
                  <div class="col-3 mx-2">
                    <div class="row py-2">
                      <span style="font-size: 17px;">Casting Id: 1265721</div>
                  </div>
                  <div class="col mx-2">
                    <div class="row">
                      &nbsp;
                    </div>
                    <div class="row">
                      &nbsp;
                    </div>
                    <div class="row">
                      &nbsp;
                    </div>
                    <div class="row p-3 float-right">
                      <i class="icon2 history"></i>
                    </div>


                  </div>
                </div>

              </a>`;

  return html;
}