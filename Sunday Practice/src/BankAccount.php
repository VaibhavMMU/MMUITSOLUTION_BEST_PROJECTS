<?php
namespace Vaibhav\Projects;

class BankAccount
{
	public string $accountNumber;
	public float $balance;

	function __construct()
	{
		$this->balance = 100;
	}
	public function deposit(float $amount)
	{
		if ($amount > 0) {
			$this->balance += $amount;
		}
	}

	public function withdraw($amount): bool
	{
		if ($amount <= $this->balance) {
			$this->balance -= $amount;
			echo "Updated Balance is " . $this->balance;
			return true;
		}
		return false;
	}
}
