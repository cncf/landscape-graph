
from time import time, sleep
    
from multiprocessing import Pool

def delayed_square(x):
    sleep(1)
    return x*x

if __name__ == '__main__': # Executed only on main process.
    start = time()
    data = list(range(8))
    with Pool() as p:
        result = sum(p.map(delayed_square, data))
    stop = time()
    print(f"result = {result} - Elapsed time {stop - start}")
