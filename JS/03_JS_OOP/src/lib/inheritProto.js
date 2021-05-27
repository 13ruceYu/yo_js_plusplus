export default function(target) {
  target.prototype.foo = function () {
    console.log('inherit works');
  }
}