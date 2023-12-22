from datetime import datetime

from sqlalchemy import Boolean, Column, Integer, String, TIMESTAMP

from app.database import Base


class ToDo(Base):
    __tablename__ = "todos"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    completed = Column(Boolean, default=False)
    created_at = Column(TIMESTAMP, default=datetime.utcnow)

    def __repr__(self):
        return f"<ToDo {self.title}>"

    def __str__(self):
        return self.title
