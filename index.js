var customerName = ("bob")
function customerName(){
  return "bob"
}
function upperCaseCustomerName(){
  customerName=("BOB")
}

function setBestCustomer() {
  window.bestCustomer = 'not bob';
}
function overwriteBestCustomer(){
  window.bestCustomer="maybe bob"
}

function changeLeastFavoriteCustomer(newCustomer) {
  throw new Error('Assignment to constant variable.');
}
