$(document).ready(function() {
  $("#afterSubmission").hide();

  $("#pictureButton").click(function() {
    $("#submission").hide();
    $("#afterSubmission").show();
    $("#resultsText").append("Please hold still while our proprietary algorithm maps your bone structure.");
    var randomNumber = Math.random() * 163;

    var dogBreedMap = ["Afghan Hound","Airedale Terrier","Akita","Alaskan Malamute","American Cocker Spaniel","American Eskimo Dog (Miniature)","American Eskimo Dog (Standard)","American Eskimo Dog (Toy)","American Foxhound","American Staffordshire Terrier","American Water Spaniel","Anatolian Shepherd","Australian Cattle Dog","Australian Shepherd","Australian Terrier","Basenji","Basset Hound","Beagle","Bearded Collie","Beauceron","Bedlington Terrier","Belgian Malinois","Belgian Sheepdog","Belgian Tervuren","Bernese Mountain Dog","Bichon Frise","Black and Tan Coonhound","Black Russian Terrier","Bloodhound","Border Collie","Border Terrier","Borzoi","Boston Terrier","Bouvier des Flandres","Boxer","Briard","Brittany","Brussels Griffon","Bull Terrier","Bulldog","Bullmastiff","Cairn Terrier","Canaan Dog","Cardigan Welsh Corgi","Cavalier King Charles Spaniel","Chesapeake Bay Retriever","Chihuahua","Chinese Crested Dog","Chinese Shar-Pei","Chow Chow","Clumber Spaniel","Collie","Curly-Coated Retriever","Dachshund (Miniature","Dachshund (Standard)","Dalmatian","Dandie Dinmont Terrier","Doberman Pinscher","English Cocker Spaniel","English Foxhound","English Setter","English Springer Spaniel","English Toy Spaniel","Field Spaniel","Finnish Spitz","Flat-Coated Retriever","French Bulldog","German Pinscher","German Shepherd Dog","German Shorthaired Pointer","German Wirehaired Pointer","Giant Schnauzer","Glen of Imaal Terrier","Golden Retriever","Gordon Setter","Great Dane","Great Pyrenees","Greater Swiss Mountain Dog","Greyhound","Harrier","Havanese","Ibizan Hound","Irish Setter","Irish Terrier","Irish Water Spaniel","Irish Wolfhound","Italian Greyhound","Japanese Chin","Keeshond","Kerry Blue Terrier","Komondor","Kuvasz","Labrador Retriever","Lakeland Terrier","Lhasa Apso","Lowchen","Maltese","Manchester Terrier (Standard)","Manchester Terrier (Toy)","Mastiff","Miniature Bull Terrier","Miniature Pinscher","Miniature Schnauzer","Neapolitan Mastiff","Newfoundland","Norfolk Terrier","Norwegian Elkhound","Norwich Terrier","Nova Scotia Duck Tolling Retriever","Old English Sheepdog","Otterhound","Papillon","Parson Russell Terrier","Pekingese","Pembroke Welsh Corgi","Petit Basset Griffon Vendeen","Pharaoh Hound","Plott","Pointer","Polish Lowland Sheepdog","Pomeranian","Poodle (Miniature)","Poodle (Standard)","Poodle (Toy)","Portuguese Water Dog","Pug","Puli","Redbone Coonhound","Rhodesian Ridgeback","Rottweiler","Saint Bernard","Saluki (or Gazelle Hound)","Samoyed","Schipperke","Scottish Deerhound","Scottish Terrier","Sealyham Terrier","Shetland Sheepdog","Shiba Inu","Shih Tzu","Siberian Husky","Silky Terrier","Skye Terrier","Smooth Fox Terrier","Soft Coated Wheaten Terrier","Spinone Italiano","Staffordshire Bull Terrier","Standard Schnauzer","Sussex Spaniel","Tibetan Mastiff","Tibetan Spaniel","Tibetan Terrier","Toy Fox Terrier","Vizsla","Weimaraner","Welsh Springer Spaniel","Welsh Terrier","West Highland White Terrier","Whippet","Wire Fox Terrier","Wirehaired Pointing Griffon","Yorkshire Terrier"];

    //google custom search KEY AIzaSyAhHqfn9EtOl9El_s0bOJ53eqpMSdvgIIM
    var wikiAPI = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + dogBreedMap[Math.round(randomNumber)].toString()+ "dog breed" + "&format=json&callback=?";
    console.log("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + dogBreedMap[Math.round(randomNumber)].toString() + "&format=json&callback=?");
    setTimeout(function(){ $("#resultsText").replaceWith('<h2 class="text-center" id="resultsText">'+ dogBreedMap[Math.round(randomNumber)].toString()+ '</h2>'); }, 6000);


    // randomNumber = randomNumber.round();
    console.log(randomNumber);
    console.log(dogBreedMap[Math.round(randomNumber)].toString());


    // setTimeout(function(){ $("#resultsText").replaceWith('<h2 class="text-center" id="resultsText">Sorry, you are not a dog.</h2>'); }, 6000);
    // setTimeout(function(){ $('#voiceClip').get(0).play(); }, 6000);

  });
  $("#pictureButtonReset").click(function() {
    $("#afterSubmission").hide();
    $("#submission").show();
    $("#resultsText").replaceWith('');

  });




window.onload = function() {

var constraints = {
  audio: false,
  video: true
};

navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream) {
  var video = document.querySelector('video');
  video.srcObject = mediaStream;
  video.play();
}).catch(function(err) {
  console.log("yikes" + err.message);
});
};
});
