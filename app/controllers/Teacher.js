class Teacher {
	constructor(name, age, email) {
		this.name = name;
		this.age = age;
		this.email = email;
		this.id = 1;
	}
	set name(name) {
		if (name === undefined || name.length === 0 || typeof name !== 'string') {
			this._name = 'No name';
			throw new SubjectException('Error while updating name');
		} else {
			this._name = name;
		}
	}
	set email(email) {
		if (email === undefined || email.length === 0 || typeof email !== 'string') {
			this._email = 'No email';
			throw new SubjectException('Error while updating email');
		} else {
			this._email = email;
		}
	}
	set age(age) {
		if (isNaN(age) || age < 1) {
			this._age = 1;
			throw new TeacherException('Error while updating age');
		} else this._age = parseInt(age);
	}
	get name() {
		return this._name;
	}
	get email() {
		return this._email;
	}
	get age() {
		return this._age;
	}
}

class TeacherException {
	constructor(error) {
		this.error = error;
	}
}

module.exports = Teacher;
