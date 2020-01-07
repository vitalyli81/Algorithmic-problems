import { AnimalQueue } from '../solution';

describe('test AnimalQueue class', () => {
  test('shoild pass', () => {
    const shelter = new AnimalQueue();

    expect(shelter.enqueue('cat')).toEqual({ cat: 0 });
    expect(shelter.enqueue('cat')).toEqual({ cat: 1 });
    expect(shelter.enqueue('cat')).toEqual({ cat: 2 });
    expect(shelter.enqueue('dog')).toEqual({ dog: 3 });
    expect(shelter.enqueue('dog')).toEqual({ dog: 4 });
    expect(shelter.enqueue('dog')).toEqual({ dog: 5 });

    expect(shelter.dequeueAny()).toEqual({ cat: 0 });
    expect(shelter.dequeueAny()).toEqual({ cat: 1 });
    expect(shelter.dequeueAny()).toEqual({ cat: 2 });
    expect(shelter.dequeueAny()).toEqual({ dog: 3 });
    expect(shelter.dequeueAny()).toEqual({ dog: 4 });
    expect(shelter.dequeueAny()).toEqual({ dog: 5 });

    expect(shelter.enqueue('cat')).toEqual({ cat: 6 });
    expect(shelter.enqueue('cat')).toEqual({ cat: 7 });
    expect(shelter.enqueue('cat')).toEqual({ cat: 8 });
    expect(shelter.enqueue('dog')).toEqual({ dog: 9 });
    expect(shelter.enqueue('dog')).toEqual({ dog: 10 });
    expect(shelter.enqueue('dog')).toEqual({ dog: 11 });

    expect(shelter.dequeueDog()).toEqual({ dog: 9 });
    expect(shelter.dequeueCat()).toEqual({ cat: 6 });
    expect(shelter.dequeueAny()).toEqual({ cat: 7 });
    expect(shelter.dequeueAny()).toEqual({ cat: 8 });
    expect(shelter.dequeueAny()).toEqual({ dog: 10 });
    expect(shelter.dequeueAny()).toEqual({ dog: 11 });
  });
});
