export class quickSortHoare {
    constructor() {
        this.trocas = 0; // variável para contar o número de trocas
    }

    sort(arr) {
        this.trocas = 0;
        this.quickSortHoare(arr, 0, arr.length - 1);
        return arr;
    }

    // low = índice do primeiro elemento, high = índice do último elemento
    quickSortHoare(arr, low, high) {
        if (low < high) {
            const pivotIndex = this.partitionHoare(arr, low, high);
            this.quickSortHoare(arr, low, pivotIndex);
            this.quickSortHoare(arr, pivotIndex + 1, high);
        }
    }

    // A função abaixo usa o primeiro elemento como pivô e coloca todos os elementos menores que o pivô
    // no lado esquerdo e todos os elementos maiores que o pivô no lado direito.
    // Ela retorna o índice do último elemento no lado menor
    partitionHoare(arr, low, high) {
        const pivot = arr[low];
        let i = low - 1;
        let j = high + 1;

        while (true) {
            // Encontra o primeiro elemento maior que o pivô
            do {
                i++;
            } while (arr[i] < pivot);

            // Encontra o primeiro elemento menor que o pivô
            do {
                j--;
            } while (arr[j] > pivot);

            // Se os índices se cruzarem, retorna j
            if (i >= j) {
                return j;
            }

            // Troca arr[i] e arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];

            this.trocas++;
        }
    }

    getTrocas() {
        return this.trocas;
    }
}