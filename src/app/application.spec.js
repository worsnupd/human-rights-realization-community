ngDescribe({
    name: 'Application',
    modules: ['seed-app', 'ui.router', 'ngMaterial', 'seed-app.routes', 'seed-app.home'],
    tests: function (deps) {
        it('should pass', function() {
            expect(42).toEqual(42);
        });
    }
});