function ListaComprasController($scope) {
    $scope.itens = [
        {produto: 'Leite', quantidade: 2, comprado: false},
        {produto: 'Manteiga', quantidade: 1, comprado: false}
    ];

    $scope.adicionaItem = function () {
        $scope.itens.push({produto: $scope.item.produto,
                           quantidade: $scope.item.quantidade,
                           comprado: false});
        $scope.item.produto = $scope.item.quantidade = '';
    };
}