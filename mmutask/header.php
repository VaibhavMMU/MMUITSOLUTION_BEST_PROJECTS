 <!--FOR HEADER PART-->
 <header>

<div class="logosec">
    <div class="logo"><a href="index.php">Dashboard</a></div>
    <img src="./images/lining.png" class="icn menuicn" id="menuicn" alt="menu-icon">
</div>
<form action="" method="get">
    <!-- SEARCH BAR FOR GIVE DIFFRENT TYPES OF VALUE -->
    <div class="searchbar">
        <input type="text" placeholder="Search" name="search_data"
            value="<?= isset($_GET['search_data']) ? $_GET['search_data'] : ''; ?>">
        <input type="hidden" name="column" value="<?= isset($_GET['column']) ? $_GET['column'] : 'eid'; ?>">
        <input type="hidden" name="order" value="<?= isset($_GET['order']) ? $_GET['order'] : 'desc'; ?>">
        <input type="hidden" name="page" value="<?= isset($_GET['page']) ? $_GET['page']  = 1 : ''; ?>">
        <button class="icon" type="submit"><span class="fa-solid fa-magnifying-glass"></span></button>
    </div>
</form>

</header>