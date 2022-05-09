class Subject {
	constructor(name, description, requiresOneBefore, teacherID) {
		this.name = name;
		this.description = description;
		this.requiresOneBefore = requiresOneBefore;
		this.teacherID = teacherID;
		this.id = 1;
	}

	static createFromJSON(jsonVal) {
		let obj = JSON.parse(jsonVal);
		return Subject.createFromObject(obj);
	}

	static createFromObject(obj) {
		let newSubject = {};
		Object.assign(newSubject, obj); // Valida tmb que obj sea un objeto
		Subject.cleanObject(obj);

		return new Product(
			newSubject.title,
			newSubject.description,
			newSubject.imageUrl,
			newSubject.unit,
			newSubject.stock,
			newSubject.pricePerUnit,
			newSubject.category
		);
	}

	static cleanObject(obj) {
		let properties = ['name', 'description', 'requiresOneBefore', 'teacherID', 'id'];
		for (const prop in obj) {
			if (!properties.includes(prop)) {
				delete obj.prop;
			}
		}
	}

	set name(name) {
		if (name === undefined || name.length === 0 || typeof name !== 'string') {
			this._name = 'No title';
			throw new SubjectException('Error while updating name');
		} else {
			this._name = name;
		}
	}
	set description(description) {
		if (description === undefined || description.length === 0 || typeof description !== 'string') {
			this._name = 'No title';
			throw new SubjectException('Error while updating description');
		} else {
			this._description = description;
		}
	}
	set requiresOneBefore(requiresOneBefore) {
		if (requiresOneBefore === undefined || requiresOneBefore !== true || requiresOneBefore !== false) {
			this._requiresOneBefore = false;
			throw new SubjectException('Error while updating requiresOneBefore');
		} else {
			this._requiresOneBefore = requiresOneBefore;
		}
	}
	set teacherID(teacherID) {
		if (isNaN(teacherID) || teacherID < 1) {
			this._teacherID = 1;
			throw new TeacherException('Error while updating teacherID');
		} else this._teacherID = parseInt(teacherID);
	}
	get name() {
		return this._name;
	}
	get description() {
		return this._description;
	}
	get requiresOneBefore() {
		return this._requiresOneBefore;
	}
	get teacherID() {
		return this._teacherID;
	}
}

class SubjectException {
	constructor(error) {
		this.error = error;
	}
}

module.exports = Subject;
