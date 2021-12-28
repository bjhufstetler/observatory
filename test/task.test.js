const Task = require('../src').Task;

describe('task', () => {
    test('initialize', () => {
        task = new Task();
        expect(task.startTime).toBe('now');
    })
})