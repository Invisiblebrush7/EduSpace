'use strict';

const fs = require('fs');
const Subject = require('./subject');

class DataHandler {
	static subjects = JSON.parse(fs.readFileSync('./app/data/subjects.json'));

	static saveFile() {
		fs.writeFileSync('./app/data/subjects.json', JSON.stringify(DataHandler.subjects));
	}

	static getSubjects() {
		return DataHandler.subjects;
	}
	static getSubjectByID(_id) {
		let subject = DataHandler.getSubjects().find((subject) => subject._id === _id);
		return subject;
	}
	static createSubject(subject) {
		let newSubject = Subject.createFromObject(subject);
		DataHandler.getSubjects().push(newSubject);
		DataHandler.saveFile();
		return newSubject;
	}
	static updateSubject(id, updatedSubject) {
		let subjectToChange = DataHandler.getProductByID(id);
		if (subjectToChange === undefined || updatedSubject === undefined) return undefined;

		for (let property in updatedSubject) {
			if (property !== 'id') {
				let subproperty = `_${property}`;

				updatedSubject[subproperty] = updatedProduct[property];
			}
		}
		DataHandler.saveFile();
		return updatedSubject;
	}
	static deleteProduct(_id) {
		let index = DataHandler.getSubjects().findIndex((subject) => subject['_id'] === _id);
		let subject = undefined;
		if (index !== -1) {
			subject = DataHandler.getSubjects()[index];
			DataHandler.getSubjects().splice(index, 1);
		}
		DataHandler.saveFile();
		return subject;
	}
	static findByName(name) {
		let subjectsFiltered = [];
		DataHandler.getSubjects().forEach((subject) => {
			if (subject._name.toLowerCase().includes(name)) {
				subjectsFiltered.push(subject);
			}
		});
		return subjectsFiltered;
	}
	static findByDescription(description) {
		let subjectsFiltered = [];
		DataHandler.getSubjects().forEach((subject) => {
			if (subject._description.toLowerCase().includes(description)) {
				subjectsFiltered.push(subject);
			}
		});
		return subjectsFiltered;
	}
	static findByDescriptionAndName(description, name) {
		let filteredByName = DataHandler.findByName(name);
		let filteredByDescription = DataHandler.findByDescription(description);

		let ids = new Set(filteredByName.map((product) => product.uuid));
		let subjectsFiltered = [...filteredByName, ...filteredByDescription.filter((product) => !ids.has(product.uuid))];

		return subjectsFiltered;
	}
	static findSubject(query) {
		let subjects;
		if (query !== undefined && typeof query === 'string') {
			query = query.split(':'); // Could be ["description", "name"], [ "<description>", "" ] or [ "<name>" ]
			if (query.length === 1) {
				// Only title
				subjects = DataHandler.findByName(query[0].toLowerCase());
			} else if (query.length === 2 && query[1] === '') {
				// Only category
				subjects = DataHandler.findByDescription(query[0].toLowerCase());
			} else {
				// Both
				subjects = DataHandler.findByDescriptionAndName(query[0].toLowerCase(), query[1].toLowerCase());
			}
		}
		return subjects;
	}
}

module.exports = DataHandler;
