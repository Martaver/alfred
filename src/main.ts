import ghost from "ghostjs";

export const message = "Holy smokes";

const go = async () => {
    console.log(ghost);
    console.log('done');
    await ghost.open('http://www.google.com');
}
