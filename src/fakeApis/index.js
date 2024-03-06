import { createServer, Model } from 'miragejs'
import { v4 as uuidv4 } from 'uuid'

const generateShortId = () => {
    const uuid = uuidv4()
    const shortId = uuid.substring(0, 4)
    return shortId
}

export const setupServer = () => {
    let server = createServer({
        models: {
            users: Model,
        },
        routes() {
            this.get('/api/listUser', (schema) => {
                const hasData = schema.users.all().length > 0

                if (!hasData) {
                    // Nếu chưa có dữ liệu, thêm dữ liệu mẫu
                    schema.db.loadData({
                        users: [
                            {
                                id: generateShortId(),
                                name: 'Jon Snow',
                                email: 'jonsnow@gmail.com',
                                age: 35,
                                phone: '(665)121-5454',
                                access: 'admin',
                            },
                            {
                                id: generateShortId(),
                                name: 'Cersei Lannister',
                                email: 'cerseilannister@gmail.com',
                                age: 42,
                                phone: '(421)314-2288',
                                access: 'manager',
                            },
                            {
                                id: generateShortId(),
                                name: 'Jaime Lannister',
                                email: 'jaimelannister@gmail.com',
                                age: 45,
                                phone: '(422)982-6739',
                                access: 'user',
                            },
                            {
                                id: generateShortId(),
                                name: 'Anya Stark',
                                email: 'anyastark@gmail.com',
                                age: 16,
                                phone: '(921)425-6742',
                                access: 'admin',
                            },
                            {
                                id: generateShortId(),
                                name: 'Daenerys Targaryen',
                                email: 'daenerystargaryen@gmail.com',
                                age: 31,
                                phone: '(421)445-1189',
                                access: 'user',
                            },
                            {
                                id: generateShortId(),
                                name: 'Ever Melisandre',
                                email: 'evermelisandre@gmail.com',
                                age: 150,
                                phone: '(232)545-6483',
                                access: 'manager',
                            },
                            {
                                id: generateShortId(),
                                name: 'Ferrara Clifford',
                                email: 'ferraraclifford@gmail.com',
                                age: 44,
                                phone: '(543)124-0123',
                                access: 'user',
                            },
                            {
                                id: generateShortId(),
                                name: 'Rossini Frances',
                                email: 'rossinifrances@gmail.com',
                                age: 36,
                                phone: '(222)444-5555',
                                access: 'user',
                            },
                            {
                                id: generateShortId(),
                                name: 'Harvey Roxie',
                                email: 'harveyroxie@gmail.com',
                                age: 65,
                                phone: '(444)555-6239',
                                access: 'admin',
                            },
                        ],
                    })
                }

                return schema.users.all()
            })
            this.post('/api/addUser', (schema, request) => {
                const payload = JSON.parse(request.requestBody)
                return schema.users.create(payload)
            })
        },
    })
}
