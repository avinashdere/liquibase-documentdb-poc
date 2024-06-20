// liquibase formatted mongodb

// changeset your.name:1 labels:example-label context:example-context runWith:mongosh
// comment: example comment

db.createCollection('customers');

// rollback db = db.person.drop()
