# sql-operations
Demo of SQL operations deployed to an aws ec2 instance

## Setup AWS EC2 Instance

### VPC Setup
1. Create a new VPC with a public and private subnet (use octet to avoid partial octets)
2. Create an internet gateway and attach it to the VPC
3. Create a route table and attach it to the VPC
4. Add public subnet to route table

#### Security Group Setup
1. Create a new security group for the VPC
2. Add inbound rules for SSH, HTTP, and HTTPS
   
### EC2 Setup
1. Launch a new EC2 instance on a t2.micro
2. Use the VPC and security group created above
3. Use the public subnet

### Create a DB and Connect to EC2 Instance
1. Create a new DB instance on RDS
2. Make sure only the EC2 instance can access the DB (private subnet)

### Verify Connection
1. SSH into the EC2 instance
   ```bash
    ssh -i <path-to-pem-file> ec2-user@<public-ip>
    ```
2. Install PostgreSQL
   ```bash
    sudo dnf update -y
    sudo dnf install postgresql15
    ```
3. Verify connection
   ```bash
    psql --host=endpoint --port=5432 --username=postgres
    ```

4. Test
   ```bash
    SELECT CURRENT_TIMESTAMP;
    ```

## Create an interactive experience

```bash
npx create-react-app <name> --template typescript
cd sql-operations
npm start
```


