<?php

class Dish {
    private array $ingredents = [];
    // public readonly string $name;
    // public function __construct(string $name) {
    //     $this->name = $name;
    // }
    public function __construct(public readonly string $name, string ...$ingredents) {
        $this->ingredents = $ingredents; 
    }

    public function addIngredent(string $item) {
        $this->ingredents[] = $item;
    }
    public function listIngredients() : string {
        return "Ingredents: " . join(',', $this->ingredents);
    }
}

class Resturant {
    private array $menu = [];
    public function __construct(Dish ...$dishes) {
        $this->menu = $dishes;
    }
    public function addDish(Dish $d) {
        $this->menu[] = $d;
    }
    public function listMenu() {
        echo '<pre>Menu:';
        foreach($this->menu as $dish) {
            echo "\n\t", $dish->name, ":\n\t\t", $dish->listIngredients(), "\n";
        }
        echo '</pre>';
    }
}


$r = new Resturant(
    new Dish('Chole Bhature', 'Chole', 'Maida', 'Salt', 'Oil'),
    new Dish('Dabale', 'Potato', 'Peanuts', 'Sew Bujia')
);

$r->listMenu();