

test('Convert a date to millies for: Collaborall', () => {
    const date = new Date(2021,9,0,0,0,0,0);

    expect(date.valueOf()).toBe(0)
})

test('Convert a date to millies for: Elements', () => {
    const date = new Date(2016,4,0,0,0,0,0);

    expect(date.valueOf()).toBe(0)
})

test('Convert a date to millies for: Volker InfraDesign', () => {
    const date = new Date(2012,3,0,0,0,0,0);

    expect(date.valueOf()).toBe(0)
})