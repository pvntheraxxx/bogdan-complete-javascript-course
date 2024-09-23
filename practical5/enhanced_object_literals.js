/* Сокращённое написание свойств объектов */

const photosGallery = (title,dimensions,date) => {
    return {
        title,
        info () {
            console.log(`
            Фото "${title}" имеет разрешение ${dimensions}`)
        },
        [dimensions]:dimensions,
        publishInfo () {
            console.log(`
            Фото было опубликовано ${Math.floor((new Date().getTime() - date.getTime()) / 1000)}
            секунды назад`);
        },
        date,
    }
}

const myDogPhoto = photosGallery(
    "My dog",
    "1920x1080",
    new Date()
);

const testDimensions1 = "1920x1080";

myDogPhoto.info();

setTimeout(() => myDogPhoto.publishInfo(),2000);

console.log(myDogPhoto[testDimensions1]); // true
console.log(myDogPhoto[testDimensions2]); // undefined 