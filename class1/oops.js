// Encapsulation - OOPs
function manageBanking(accountNumber, name, initialBalance) {
  let balance = initialBalance; // Clousre variables.

  return Object.freeze({
    // getters
    getAccountNumber: function () {
      console.log(`${name} has account number: ${accountNumber}`);
      return accountNumber;
    },
    getName: function () {
      return name;
    },
    getCurrentBalance: function () {
      console.log(`${name} has balance: ${balance}`);
      //   return balance;
    },

    // setters
    addAmountToAccount: function (amount) {
      balance = balance + amount;
      return balance;
    },
    withdraw: function (amount) {
        if(amount <= balance){
            balance = balance - amount;
            console.log(
              `You have withdrawn ${amount} from your account. Your current balance is ${balance}`
            );
        }else{
            console.log(`You have insuffiencet balance`)
        }
      
    },
  });
}

// Object instance, - constructor 
const reenaAccount = manageBanking(101, "Reena", 1000);

const vinayAccount = manageBanking(102, "Vinay", 800);


reenaAccount.getCurrentBalance = function () {
    console.log('balcne', 0)
    return 0;
}
reenaAccount.addAmountToAccount(100);

reenaAccount.withdraw(19);

reenaAccount.getCurrentBalance();

