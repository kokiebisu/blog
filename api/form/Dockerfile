FROM public.ecr.aws/lambda/nodejs:14

COPY package.json .
RUN npm install
COPY . .

# ENV SENDGRID_API_KEY=${SENDGRID_API_KEY}
# ENV SENDGRID_AUTHORIZED_EMAIL = ${SENDGRID_AUTHORIZED_EMAIL}

CMD [ "index.handler" ]

