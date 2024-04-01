// BankAccount class
class BankAccount {
    private balance: number = 0;

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        this.balance -= amount;
    }

    checkBalance(): void {
        console.log(`Current account balance: US$ ${this.balance}.`);
    }
}

// Instance of BankAccount class
const bankAccount = new BankAccount();
// deposit
bankAccount.deposit(50);
// check balance after deposit
bankAccount.checkBalance(); // output: Current account balance: US$ 50.
// withdraw
bankAccount.withdraw(12);
// check balance after withdrawal
bankAccount.checkBalance(); // output: Current account balance: US$ 38.