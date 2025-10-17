export default function ImpliedReturn() {
    const multiply = (a: number, b: number) => a * b;
    const fourTimeFive = multiply(4, 5);
    console.log(fourTimeFive);
    return (
        <div id="wd-implied-return">
            <h4>Implied return</h4>
            fourTimeFive = {fourTimeFive} <br />
            multiply(4, 5) = {multiply(4, 5)} <hr />
        </div>
    )
}
