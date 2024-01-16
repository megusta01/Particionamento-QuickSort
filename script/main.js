import { quickSortHoare } from "./quickSortHoare.js";
import { quickSortLomuto } from "./quickSortLomuto.js";

class Run {
    // Função para medir o tempo de execução de cada algoritmo
    static measureTime(partitionMethod, sortingFunction, arr) {
        const startTime = process.hrtime.bigint();
        sortingFunction.sort([...arr]); // Clonar o array para evitar alterações no array original
        const endTime = process.hrtime.bigint();
        const timeTaken = endTime - startTime;

        const milliseconds = Number(timeTaken) / 1_000_000.0;
        const formattedTime = milliseconds.toFixed(7);

        const trocas = sortingFunction instanceof quickSortLomuto
            ? sortingFunction.getTrocas()
            : sortingFunction.getTrocas();

        console.log(`${partitionMethod}: ${formattedTime} milissegundos`);
        console.log(`Quantidade de trocas: ${trocas}`);

        return timeTaken;
    }

    // Função para gerar um array de números aleatórios e únicos
    static generateRandomArray(size) {
        const dataSet = Array.from({ length: size }, () => Math.floor(Math.random() * (size + 1)));
        return dataSet;
    }

    // Função para encontrar o algoritmo/método mais rápido
    static findFastestAlgorithm(...times) {
        let minTime = BigInt(Number.MAX_SAFE_INTEGER);
        let fastestAlgorithm = "";

        const algorithms = ["Hoare", "Lomuto"];

        for (let i = 0; i < times.length; i++) {
            if (times[i] < minTime) {
                minTime = times[i];
                fastestAlgorithm = algorithms[i];
            }
        }

        return fastestAlgorithm;
    }

    static main() {
        const randomArray = Run.generateRandomArray(200000);
        const sizes = [100, 500, 1000, 5000, 30000, 80000, 100000, 150000, 200000];

        for (const size of sizes) {
            const subarray = randomArray.slice(0, size);
            console.log(`\nTamanho do Subarray: ${size}`);

            // Teste com o método de particionamento de Tony Hoare
            const hoareTime = Run.measureTime("Hoare", new quickSortHoare(), subarray);

            // Teste com o método de particionamento de Lomuto
            const lomutoTime = Run.measureTime("Lomuto", new quickSortLomuto(), subarray);

            // Identificar o método mais rápido
            const fastestAlgorithm = Run.findFastestAlgorithm(hoareTime, lomutoTime);
            console.log(`O método mais rápido foi: ${fastestAlgorithm}`);
        }
    }
}

Run.main();