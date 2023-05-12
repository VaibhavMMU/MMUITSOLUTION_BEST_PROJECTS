<?php
require_once "vendor/autoload.php";

use Vaibhav\Projects\BankAccount;

$account = new BankAccount();

$account->accountNumber = 1;

$account->deposit(100);
$account->withdraw(10);