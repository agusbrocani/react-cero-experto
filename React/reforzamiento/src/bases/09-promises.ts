const myPromise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        //! Yo quiero mis 100 dolares!!
        // poner solo 1 callback, si pongo los 2, se va siempre por el primero. Para poner los 2, usar algun if o logica similar.
        resolve(100);
        reject('Mi amigo se perdió');
    }, 2000);
});

myPromise.then((myMoney) => {
        console.log(`Tengo mi dinero ${myMoney}`);
    }
).catch((reason) => {
    console.warn(reason);
}).finally(() => {
        console.log('A seguir con mi vida.');
    }
);
