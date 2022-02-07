/// <reference path="_include.d.ts" />
declare module Engine {
    class MersenneTwister {
        private N;
        private M;
        private MATRIX_A;
        private UPPER_MASK;
        private LOWER_MASK;
        private mt;
        private mti;
        constructor(seed?: number);
        public init_genrand(s: number): void;
        public init_by_array(init_key: number[], key_length: number): void;
        public genrand_int32(): number;
        public genrand_int31(): number;
        public genrand_real1(): number;
        public random(): number;
        public genrand_real3(): number;
        public genrand_res53(): number;
    }
}
