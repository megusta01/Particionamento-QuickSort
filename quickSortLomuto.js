export class quickSortLomuto {
    constructor() {
        this.trocas = 0; // variável para contar o número de trocas
    }

    sort(arr) {
        this.trocas = 0;
        this.quickSortLomuto(arr, 0, arr.length - 1);
        return arr;
    }

    quickSortLomuto(arr, low, high) {
        if (low < high) {
            const pivotIndex = this.partitionLomuto(arr, low, high);
            this.quickSortLomuto(arr, low, pivotIndex - 1);
            this.quickSortLomuto(arr, pivotIndex + 1, high);
        }
    }

    partitionLomuto(arr, low, high) {
        const pivot = arr[high];
        let i = low - 1; // Índice do menor elemento

        for (let j = low; j <= high - 1; j++) {
            // Se o elemento atual for menor ou igual ao pivô
            if (arr[j] <= pivot) {
                i++;
                // Troca arr[i] e arr[j]
                [arr[i], arr[j]] = [arr[j], arr[i]];

                this.trocas++;
            }
        }

        // Troca arr[i+1] e arr[high] (pivô)
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

        this.trocas++;

        return i + 1;
    }

    getTrocas() {
        return this.trocas;
    }
}