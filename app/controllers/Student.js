class Student {
	constructor(name, carreer, semester, email, password) {
		this.name = name;
		this.carreer = carreer;
		this.semester = semester;
		this.email = email;
		this.password = password;
		this.id = 1;
	}
	set name(name) {
		if (name === undefined || name.length === 0 || typeof name !== 'string') {
			this._email = 'No name';
			throw new SubjectException('Error while updating name');
		} else {
			this._email = name;
		}
	}
	set carreer(carreer) {
		if (carreer === undefined || carreer.length === 0 || typeof carreer !== 'string') {
			this._carreer = 'No carreer';
			throw new SubjectException('Error while updating carreer');
		} else {
			this._carreer = carreer;
		}
	}
	set email(email) {
		if (email === undefined || email.length === 0 || typeof email !== 'string') {
			this._email = 'No title';
			throw new SubjectException('Error while updating email');
		} else {
			this._email = email;
		}
	}
	set password(password) {
		if (password === undefined || password.length === 0 || typeof password !== 'string') {
			this._password = 'No title';
			throw new SubjectException('Error while updating password');
		} else {
			this._password = password;
		}
	}
	set semester(semester) {
		if (isNaN(semester) || semester < 1) {
			this._semester = 1;
			throw new TeacherException('Error while updating semester');
		} else this._semester = parseInt(semester);
	}

	get name() {
		return this._name;
	}
	get semester() {
		return this._semester;
	}
	get semester() {
		return this._semester;
	}
	get email() {
		return this._email;
	}
	get password() {
		return this._password;
	}
}
