// Sn = n/2[2a + (n − 1) × d] 
// Program to Check Arithmetic Progression

function checkArithematicProgression() {
    let a = 1;
    let d = 3;
    let n = 15;


    let b = n / 2;
    let c = b * 2 * a + (n - 1) * d;
    console.log(c)

}
checkArithematicProgression()
